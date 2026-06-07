const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

// Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session setup
app.use(session({
  secret: 'sitezet-admin-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
}));

// Static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/public', express.static(path.join(__dirname, 'public'))); // for uploads

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, 'public', 'uploads', 'logos');
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Database helper
const dbPath = path.join(__dirname, 'data', 'logos.json');
const getLogos = () => {
    if (!fs.existsSync(dbPath)) return [];
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
};
const saveLogos = (logos) => {
    fs.writeFileSync(dbPath, JSON.stringify(logos, null, 2));
};

// --- PUBLIC ROUTES ---
app.get('/', (req, res) => {
  const logos = getLogos();
  res.render('index', { currentRoute: '/', logos });
});

app.get('/about', (req, res) => {
  res.render('about', { currentRoute: '/about' });
});

app.get('/services', (req, res) => {
  res.render('services', { currentRoute: '/services' });
});

app.get('/works', (req, res) => {
  res.render('works', { currentRoute: '/works' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { currentRoute: '/contact' });
});

// --- ADMIN ROUTES ---
const requireAuth = (req, res, next) => {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect('/admin/login');
    }
};

app.get('/admin/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'adminsitezet') {
        req.session.loggedIn = true;
        res.redirect('/admin');
    } else {
        res.render('login', { error: 'Username atau Password salah!' });
    }
});

app.get('/admin/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/admin', requireAuth, (req, res) => {
    const logos = getLogos();
    const success = req.query.success;
    res.render('admin-logos', { logos, success });
});

app.post('/admin/logos/add', requireAuth, upload.single('logoImage'), (req, res) => {
    const logos = getLogos();
    const newLogo = {
        id: Date.now().toString(),
        name: req.body.name,
        imageUrl: req.file ? `/public/uploads/logos/${req.file.filename}` : ''
    };
    logos.push(newLogo);
    saveLogos(logos);
    res.redirect('/admin?success=added');
});

app.post('/admin/logos/delete/:id', requireAuth, (req, res) => {
    let logos = getLogos();
    const logoToDelete = logos.find(l => l.id === req.params.id);
    
    // Hapus file fisik jika ada
    if (logoToDelete && logoToDelete.imageUrl) {
        const filePath = path.join(__dirname, logoToDelete.imageUrl);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
    
    logos = logos.filter(l => l.id !== req.params.id);
    saveLogos(logos);
    res.redirect('/admin?success=deleted');
});

// Fallback for HTML extension just in case
app.get('/:page.html', (req, res) => {
  const page = req.params.page;
  const validPages = ['index', 'about', 'services', 'works', 'contact'];
  if (validPages.includes(page)) {
    if (page === 'index') return res.redirect('/');
    res.redirect(`/${page}`);
  } else {
    res.status(404).send('Page not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

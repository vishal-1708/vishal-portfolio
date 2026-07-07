<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact | KS Vishal</title>
<meta name="description" content="Get in touch with KS Vishal for digital marketing and SEO opportunities.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<header class="site-header">
  <nav class="nav">
    <a href="index.html" class="brand"><span class="dot"></span> KS Vishal</a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="blog.html">SEO Blog</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<section class="hero" style="padding-bottom:40px;">
  <div class="container">
    <div class="eyebrow">Contact</div>
    <h1 style="max-width:20ch;">Let's talk.</h1>
    <p class="lede">
      Whether it's an opportunity, feedback on the blog, or a question about
      the projects here — send a message and I'll reply by email.
    </p>
  </div>
</section>

<section>
  <div class="container contact-wrap">

    <div>
      <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div class="field">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send message</button>
        <p id="form-status" class="form-status" role="status"></p>
      </form>
    </div>

    <div class="contact-info">
      <div class="card">
        <h3>Email</h3>
        <p><a href="mailto:vishalkavitha999@gmail.com">vishalkavitha999@gmail.com</a></p>
      </div>
      <div class="card">
        <h3>Response time</h3>
        <p>Usually within 1–2 days.</p>
      </div>
    </div>

  </div>
</section>

<footer class="site-footer">
  <div class="container">
    <span>&copy; 2026 KS Vishal — Digital Marketing Portfolio</span>
    <span>Built and maintained by hand, one commit at a time.</span>
  </div>
</footer>

<script src="script.js"></script>
</body>
</html>

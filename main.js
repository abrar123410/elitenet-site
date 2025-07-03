<!-- External JavaScript -->
  <script src="main.js"></script>
  <script>
    function searchSite() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();

      const pages = {
        "network": "networking-basics.html",
        "networking": "networking-basics.html",
        "router": "networking-basics.html",
        "ip": "networking-basics.html",
        "hardware": "computer-hardware.html",
        "cpu": "computer-hardware.html",
        "ram": "computer-hardware.html",
        "motherboard": "computer-hardware.html",
        "security": "cybersecurity.html",
        "cyber": "cybersecurity.html",
        "cctv": "cctv-installation.html",
        "camera": "cctv-installation.html",
        "about": "about.html",
        "contact": "contact.html"
      };

      for (let keyword in pages) {
        if (query.includes(keyword)) {
          window.location.href = pages[keyword];
          return;
        }
      }

      alert("No matching content found. Try a different keyword.");
    }

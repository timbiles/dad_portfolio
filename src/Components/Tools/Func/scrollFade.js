export default function scroll(val) {
  window.addEventListener('scroll', function() {
    document.querySelectorAll('.scroll').forEach(e => {
      let position, visible;
      position = e.getBoundingClientRect();
      visible = position.top < window.innerHeight && position.bottom >= 0;
      if (visible) {
        e.style.opacity = '1';
        e.style.transition = 'opacity 2s';
      }
    });
  });
}
const navbar = document.querySelector('nav');

            window.addEventListener('scroll', () =>{
                if(window.scrollY> 50){
                    navbar.style.background = 'rgba(10, 10, 15 , 0.9)';
                    navbar.style.borderColor = '#1e1e2e';
                    navbar.style.backdropFilter = 'blur(12px)';
                } else{
                    navbar.style.background = 'transparent';
                    navbar.style.borderColor = 'transparent';
                    navbar.style.backdropFilter = 'none';
                }
            });
    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {threshold: 0.12});    
    document.querySelectorAll('.skill-card, .curso-card, .exp-item, .contato-link, .contato-texto h2, .contato-texto p').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(el);
    });    

    
const cursor = document.getElementById('cursor');
const anel = document.getElementById('cursorAnel');

let mx = 0, my = 0; 
let rx = 0, ry = 0; 

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});


function animarAnel() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  anel.style.left = rx + 'px';
  anel.style.top = ry + 'px';
  requestAnimationFrame(animarAnel);
}
animarAnel();


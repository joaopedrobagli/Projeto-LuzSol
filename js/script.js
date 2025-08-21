
       
        const energySlider = document.getElementById('energy-slider');
        const waterSlider = document.getElementById('water-slider');
        const wasteSlider = document.getElementById('waste-slider');
        const energyValue = document.getElementById('energy-value');
        const waterValue = document.getElementById('water-value');
        const wasteValue = document.getElementById('waste-value');
        
        energySlider.addEventListener('input', () => {
            energyValue.textContent = `${energySlider.value} kWh`;
        });
        
        waterSlider.addEventListener('input', () => {
            waterValue.textContent = `${waterSlider.value} litros`;
        });
        
        wasteSlider.addEventListener('input', () => {
            wasteValue.textContent = `${wasteSlider.value} kg`;
        });
        
        
        function calculateSavings() {
            const energy = parseInt(energySlider.value);
            const water = parseInt(waterSlider.value);
            const waste = parseInt(wasteSlider.value);
            
            const carbonReduction = energy * 0.6; // 0.6 kg CO₂ por kWh
            const waterSaved = water;
            const wasteDiverted = waste;
            
            document.getElementById('carbon-saving').textContent = `Redução de ${carbonReduction.toFixed(0)} kg de CO₂`;
            document.getElementById('water-saving').textContent = `Conservação de ${waterSaved} litros de água`;
            document.getElementById('waste-saving').textContent = `Desvio de ${wasteDiverted} kg de aterro sanitário`;
            
            document.getElementById('result').classList.add('show');
        }
        
    
        function animateCounter(elementId, finalValue, duration) {
            let startTime = null;
            const element = document.getElementById(elementId);
            const finalNumber = parseInt(finalValue);
            
            function updateCounter(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                
                const currentValue = Math.floor(progress * finalNumber);
                element.textContent = currentValue.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = finalNumber.toLocaleString();
                }
            }
            
            requestAnimationFrame(updateCounter);
        }
        
        
        function startAnimations() {
            animateCounter('client-count', 250, 2000);
            animateCounter('project-count', 500, 2000);
            animateCounter('co2-count', 1200, 2000);
            animateCounter('energy-count', 3500, 2000);
        }
        
   
        const statsSection = document.querySelector('.stats');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAnimations();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
        
   
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            this.reset();
        });
   

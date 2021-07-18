import './style.css'

const slider = document.querySelector('input[type=range]')
const pageviews = document.querySelector('[data-page-views]')
const price = document.querySelector('[data-price]')
const pricing = [
  {
    views: '10K',
    price: '8.00',
  },
  {
    views: '50K',
    price: '12.00',
  },
  {
    views: '100K',
    price: '16.00',
  },
  {
    views: '500K',
    price: '24.00',
  },
  {
    views: '1M',
    price: '36.00',
  },
]

slider.addEventListener('input', (e) => {
  const val = pricing[e.target.value]
  pageviews.innerHTML = val.views
  price.innerHTML = val.price
  
  const progress = (e.target.value / 4) * 100
  e.target.style.backgroundSize = `${progress}% 100%`
})
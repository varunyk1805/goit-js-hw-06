const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
gallery.style.listStyle = 'none';
gallery.style.display = 'flex';
gallery.style.justifyContent = 'space-around';

const elementsOfGallery = images.map(image =>
  `<li class="gallery__item" style='width:30%; height:150px' > <img src="${image.url}" alt="${image.alt}" style='display:block; height:100%; width:100%; object-fit:cover'/> </li>`)
  .join('');

gallery.insertAdjacentHTML("afterbegin", elementsOfGallery);



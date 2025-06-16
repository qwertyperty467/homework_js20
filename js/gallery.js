const gallery = [
    {
        image: "https://cdn.pixabay.com/photo/2020/02/11/18/21/marostica-chess-castle-4840564_1280.jpg" ,
        title: "Italy",
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/05/15/20/53/the-london-eye-769266_1280.jpg" ,
        title: "London",
    },
       {
        image: "https://cdn.pixabay.com/photo/2020/06/08/09/36/city-5273775_1280.jpg" ,
        title: "France",
    },
        {
        image: "https://cdn.pixabay.com/photo/2020/02/11/18/21/marostica-chess-castle-4840564_1280.jpg" ,
        title: "Italy",
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/05/15/20/53/the-london-eye-769266_1280.jpg" ,
        title: "London",
    },
       {
        image: "https://cdn.pixabay.com/photo/2020/06/08/09/36/city-5273775_1280.jpg" ,
        title: "France",
    },
    
]

const galleryList = document.getElementById("gallery__list")


const markUp = gallery.map(({image, title}) => `
<li class="card gallery__item" style="width: 18rem">
      <img
        src=${image}
        class="card-img-top"
        alt=${title}
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </li>
    `).join("")

galleryList.insertAdjacentHTML("beforeend", markUp)

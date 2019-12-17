import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from  './reducers'
import App from './routes/App'

//const baseURL = 'https://us-central1-personal-cv-5fd83.cloudfunctions.net/api';
const initialState = {
    "favorites":{},
    "certificates" : [ {
      "detail" : "Desarrollo Multiplataforma con ASP.NET Core",
      "id" : 1,
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs4nGpu05zJm1poWdSf_pESmEsu9VkcTFUyvI23TLTSBGnW96n",
      "name" : "Curso de ASP.NET Core",
      "place" : "Platzi"
    }, {
      "detail" : "Arquitectura Frontend",
      "id" : 2,
      "image" : "https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png",
      "name" : "Curso Profesional de Git y GitHub",
      "place" : "Platzi"
    }, {
      "detail" : "Frontend con React.JS",
      "id" : 3,
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png",
      "name" : "Curso de React.js",
      "place" : "Platzi"
    }, {
      "detail" : "Frontend con React.JS",
      "id" : 4,
      "image" : "https://cms-assets.tutsplus.com/uploads/users/1795/posts/30349/preview_image/ReduxLogo.jpg",
      "name" : "Curso de React router y Redux",
      "place" : "Platzi"
    }, {
      "detail" : "Amazon Web Services",
      "id" : 5,
      "image" : "https://www.itreseller.es/files/201801/aws-amazon.jpg",
      "name" : "Curso de Networking y Content Delivery en AWS",
      "place" : "Platzi"
    }, {
      "detail" : "Administración de Servidores y DevOps",
      "id" : 6,
      "image" : "https://halcyoona.files.wordpress.com/2018/07/ec2-logo.png",
      "name" : "Curso de Fundamentos de AWS Cloud",
      "place" : "Platzi"
    }, {
      "detail" : "Amazon Web Services RDS y DynamoDB",
      "id" : 7,
      "image" : "https://www.progracoding.com/wp-content/uploads/2019/06/Amazon-RDS-Tutorial.png",
      "name" : "Curso de Bases de Datos en AWS",
      "place" : "Platzi"
    } ],
    "personalData" : {
      "birthdate" : "16 de julio de 1993",
      "city" : "Bogotá D.C",
      "country" : "Colombia",
      "description" : "",
      "github" : "https://github.com/ceruizdev/",
      "lastName" : "Ruiz Medina",
      "linkedIn" : "https://www.linkedin.com/in/carlosruiz93",
      "name" : "Carlos",
      "secondName" : "Enrique"
    },
    "university" : {
      "abbreviation" : "ETITC",
      "name" : "Systems Engineering",
      "university" : "Escuela Tecnológica Instituto Tecnico Central"
    }
  }
  
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);
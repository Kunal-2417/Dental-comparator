import React from 'react'
import Header from '../Head/Header'
import "./Search.css";
import { useLocation, useNavigate } from 'react-router-dom';

function Search() {
    const location=useLocation();
    console.log(location)
    const submitChannel=async()=>{

        // const ProductInput=document.querySelector('.channel-input');x
        const product=location.state.product;
        console.log(product)
            const res=await fetch('http://localhost:3000/creators',{
                method:'POST',
                body:JSON.stringify({product}),
                headers:{'Content-Type':'application/json'}});
            const data=await res.json();
          console.log(data);

          const ctr = document.querySelector('.container1');
            data.Data1.list1.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 100px; height: 100px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price=newEl('h4',{innerText:creator.price})
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr.appendChild(card);
                // console.log(creator.name);
                // creator.name;
                // creator.price;

            })
            const res2 = await fetch('http://localhost:3000/creator2', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data2 = await res2.json();
            console.log(data2);
            const ctr2 = document.querySelector('.container2');
            data2.Data2.list2.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr2.appendChild(card);
                //  creator.name;
                // creator.price;
            })
            const res3 = await fetch('http://localhost:3000/creator3', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data3 = await res3.json();
            const ctr3 = document.querySelector('.container3');
            data3.Data3.list3.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr3.appendChild(card);
            })
            const res4 = await fetch('http://localhost:3000/creator4', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data4 = await res4.json();
            const ctr4 = document.querySelector('.container4');
            data4.Data4.list4.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr4.appendChild(card);
            })
            const res5 = await fetch('http://localhost:3000/creator5', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data5 = await res5.json();
            const ctr5 = document.querySelector('.container5');
            data5.Data5.list5.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr5.appendChild(card);
            })
            const res6 = await fetch('http://localhost:3000/creator6', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data6 = await res6.json();
            const ctr6 = document.querySelector('.container6');
            data6.Data6.list6.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr6.appendChild(card);
            })
            const res7 = await fetch('http://localhost:3000/creator7', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data7 = await res7.json();
            const ctr7 = document.querySelector('.container7');
            data7.Data7.list7.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr7.appendChild(card);
            })
            const res8 = await fetch('http://localhost:3000/creator8', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data8 = await res8.json();
            const ctr8 = document.querySelector('.container8');
            data8.Data8.list8.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr8.appendChild(card);
            })
            const res9 = await fetch('http://localhost:3000/creator9', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data9 = await res9.json();
            const ctr9 = document.querySelector('.container9');
            data9.Data9.list9.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr9.appendChild(card);
            })
            const res10 = await fetch('http://localhost:3000/creator10', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data10 = await res10.json();
            const ctr10 = document.querySelector('.container10');
            data10.Data10.list10.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name = newEl('h3', { innerText: creator.name });
                const price = newEl('h4', { innerText: creator.price })
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr10.appendChild(card);
            })
            const res11 = await fetch('http://localhost:3000/creator11', {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data11 = await res11.json();
            const ctr11 = document.querySelector('.container11');
            data11.Data11.list11.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
                const name=newEl('h3',{innerText:creator.name});
                const price=newEl('h4',{innerText:creator.price})
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr11.appendChild(card);
            })

            //const ctr12 = document.querySelector('.container12');
            //data.Data12.list12.forEach(creator => {
            //    const card = newEl('div', { class: 'card' });
            //    const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
            //   const name=newEl('h3',{innerText:creator.name});
            //   const price=newEl('h4',{innerText:creator.price})
            //    card.appendChild(img);
            //    card.appendChild(name);
            //   card.appendChild(price);
            //    ctr12.appendChild(card);
            //})

           /* const ctr13 = document.querySelector('.container13');
            data.Data13.list13.forEach(creator => {
                const card = newEl('div', { class: 'card' });
                const img = newEl('img', { src: creator.image, style: 'width: 200px; height: 200px;' });
               const name=newEl('h3',{innerText:creator.name});
               const price=newEl('h4',{innerText:creator.price})
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                ctr13.appendChild(card);
            })*/

        }
        function newEl(type,attrs={}){
            const el=document.createElement(type);
            for(let attr in attrs){
                const values=attrs[attr];
                if(attr=='innerText') el.innerText=values;
                else el.setAttribute(attr,values);
            }
            return el;
        }
        submitChannel();
  return (
    <>
        <Header/>
    <div>
    <div className='OuterBox'>
    <div className="search-bar">
        <h1>Products</h1>
        <h1>Search results for `${location.state.product}`</h1>
    </div>


    <h4>Dental Stall</h4>
    <div className="container1"></div>

    <h4>PinkBlue</h4>
    <div className="container2"></div>
   
    <h4>Libral Trader</h4>
    <div className="container3"></div>

    <h4>Medika Bazar</h4>
    <div className="container4"></div>

    <h4>Daantwale</h4>
    <div className="container5"></div>
    
    <h4>Dental World</h4>
    <div className="container6"></div>

    <h4>Amplemeds</h4>
    <div className="container7"></div>

    <h4>My Dental stock</h4>
    <div className="container8"></div>

    <h4>Greenguava</h4>
    <div className="container9"></div>

    <h4>The dental dealer</h4>
    <div className="container10"></div>

    <h4>Dentaltix</h4>
    <div className="container11"></div>

    <h4>Dental Pord</h4>
    <div className="container12"></div>

    <h4>DentalBasket</h4>
    <div className="container13"></div>
        </div>
    </div>

    </>
  )
}

export default Search

const search = document.querySelector('#search');
const box1 = document.querySelector('[box1]');
const box2 = document.querySelector('[box2]');
const box3 = document.querySelector('[box3]');
const box4 = document.querySelector('[box4]');
const box5 = document.querySelector('[box5]');
const box6 = document.querySelector('[box6]');

function searchfun()
{
    if(search.value==='1')
    {
        const img=document.createElement('img');
        img.src='./image2.jpeg';
        box1.appendChild(img);
    }else
    if(search.value==='2')
    {
        const img=document.createElement('img');
        img.src='./image3.jpeg';
        box2.appendChild(img);
    }else
    if(search.value==='3')
    {
        const img=document.createElement('img');
        img.src='./image4.jpeg';
        box3.appendChild(img);
    }else
    if(search.value==='4')
    {
        const img=document.createElement('img');
        img.src='./image5.jpeg';
        box4.appendChild(img);
    }else
    if(search.value==='5')
    {
        const img=document.createElement('img');
        img.src='./image6.jpeg';
        box5.appendChild(img);
    }else
    if(search.value==='6')
    {
        const img=document.createElement('img');
        img.src='./image7.jpeg';
        box6.appendChild(img);
    }else{
        alert('Input range is : 1 to 6');
    }
    
}

function reset()
{

search.value='1';
   
}


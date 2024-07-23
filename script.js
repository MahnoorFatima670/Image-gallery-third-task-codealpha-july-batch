MenuIcon=document.getElementById('menu-icon1');
NavBar=document.getElementById('navbar1');
MenuIcon.addEventListener("click", ()=>{
NavBar.classList.toggle('active');
});
const images = document.querySelectorAll('.image img');
// Get all inner image sets
const innerSets = document.querySelectorAll('.inner-set');
// Add click event listener to each image
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Hide all inner image sets initially
    innerSets.forEach(set => {
      set.classList.add('hidden');
    });
   // Toggle visibility of the corresponding inner image set
    innerSets[index].classList.toggle('hidden');
  });
});

document.querySelectorAll('#inner-images img').forEach(image=>{
image.onclick=() =>{

document.querySelector('.popupimages').style.display='block';
document.querySelector('.popupimages img').src=image.getAttribute('src');

}
});
document.querySelector('.popupimages span').onclick=()=>{
  document.querySelector('.popupimages').style.display='none';
}
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const input = document.getElementById('searchInput').value.toLowerCase();
  if (input === 'nature') {
      window.location.href = 'index1.html';
  } else if(input === 'travel')
{

  window.location.href = 'index2.html';
}
else if(input === 'food')
  {
  
    window.location.href = 'index3.html';
  }

  else if(input === 'art and design')
    {
    
      window.location.href = 'index4.html';
    }


    else if(input==='clothes')
    {

      const Clothes=document.getElementById('inner-images-1');

     if(Clothes)
     {
      
      Clothes.classList.remove('hidden');

      

     }
    }
     else if(input==='makeup')
      {
        const makeup=document.getElementById('inner-images-2');
      
       if(makeup)
       {
        makeup.classList.remove('hidden');  
        Clothes=document.getElementById('inner-images-1');
        if(Clothes)
       {
      Clothes.classList.add('hidden');
       }
      gadgets=document.getElementById('inner-images-3');
      if(gadgets)
     {
    gadgets.classList.add('hidden');
     }

     phones=document.getElementById('inner-images-4');
     if(phones)
    {
   phones.classList.add('hidden');
    }

    shoes=document.getElementById('inner-images-5');
        if(shoes)
       {
      shoes.classList.add('hidden');
       }

     hills=document.getElementById('inner-images-6');
       if(hills)
      {
     hills.classList.add('hidden');
      }
      sea=document.getElementById('inner-images-7');
      if(sea)
     {
    sea.classList.add('hidden');
     }
     places=document.getElementById('inner-images-8');
     if(places)
    {
   places.classList.add('hidden');
    }

    interior=document.getElementById('inner-images-9');
    if(interior)
   {
  interior.classList.add('hidden');
   }
       }
  
      }
      else if(input==='gadgets')
        {
    
          const techgadgets=document.getElementById('inner-images-3');
        
         if(techgadgets)
         {
          
          techgadgets.classList.remove('hidden');
          Clothes=document.getElementById('inner-images-1');
          if(Clothes)
         {
        Clothes.classList.add('hidden');
         }
        makeup=document.getElementById('inner-images-2');
        if(makeup)
       {
      makeup.classList.add('hidden');
       }
  
       phones=document.getElementById('inner-images-4');
       if(phones)
      {
     phones.classList.add('hidden');
      }
  
      shoes=document.getElementById('inner-images-5');
          if(shoes)
         {
        shoes.classList.add('hidden');
         }
  
       hills=document.getElementById('inner-images-6');
         if(hills)
        {
       hills.classList.add('hidden');
        }
  
  
        sea=document.getElementById('inner-images-7');
        if(sea)
       {
      sea.classList.add('hidden');
       }
  
       places=document.getElementById('inner-images-8');
       if(places)
      {
     places.classList.add('hidden');
      }
  
      interior=document.getElementById('inner-images-9');
      if(interior)
     {
    interior.classList.add('hidden');
     }
  
  }
      }

        else if(input==='phones')
          {
      
            const phones=document.getElementById('inner-images-4');
           if(phones)
           {
            phones.classList.remove('hidden');
            Clothes=document.getElementById('inner-images-1');
            if(Clothes)
           {
          Clothes.classList.add('hidden');
           }
          gadgets=document.getElementById('inner-images-3');
          if(gadgets)
         {
        gadgets.classList.add('hidden');
         }
    
         makeup=document.getElementById('inner-images-2');
         if(makeup)
        {
       makeup.classList.add('hidden');
        }
    
        shoes=document.getElementById('inner-images-5');
            if(shoes)
           {
          shoes.classList.add('hidden');
           }
    
         hills=document.getElementById('inner-images-6');
           if(hills)
          {
         hills.classList.add('hidden');
          }
    
    
          sea=document.getElementById('inner-images-7');
          if(sea)
         {
        sea.classList.add('hidden');
         }
    
         places=document.getElementById('inner-images-8');
         if(places)
        {
       places.classList.add('hidden');
        }
    
        interior=document.getElementById('inner-images-9');
        if(interior)
       {
      interior.classList.add('hidden');
       }
          
      } 
          }




          else if(input==='shoes')
            {
        
              const shoes=document.getElementById('inner-images-5');
             if(shoes)
             {
              
              shoes.classList.remove('hidden');
              Clothes=document.getElementById('inner-images-1');
        if(Clothes)
       {
      Clothes.classList.add('hidden');
       }
      gadgets=document.getElementById('inner-images-3');
      if(gadgets)
     {
    gadgets.classList.add('hidden');
     }

     phones=document.getElementById('inner-images-4');
     if(phones)
    {
   phones.classList.add('hidden');
    }

    makeup=document.getElementById('inner-images-2');
        if(makeup)
       {
      makeup.classList.add('hidden');
       }

     hills=document.getElementById('inner-images-6');
       if(hills)
      {
     hills.classList.add('hidden');
      }
 
sea=document.getElementById('inner-images-7');
   if(sea)
  {
 sea.classList.add('hidden');
  }

  places=document.getElementById('inner-images-8');
  if(places)
 {
places.classList.add('hidden');
 }

 interior=document.getElementById('inner-images-9');
 if(interior)
{
interior.classList.add('hidden');
}
 }
 }
 else if(input==='hills')
              {
          
                const hills=document.getElementById('inner-images-6');
          if(hills)
               {
                
                hills.classList.remove('hidden');
                Clothes=document.getElementById('inner-images-1');
        if(Clothes)
       {
      Clothes.classList.add('hidden');
       }
      gadgets=document.getElementById('inner-images-3');
      if(gadgets)
     {
    gadgets.classList.add('hidden');
     }

     phones=document.getElementById('inner-images-4');
     if(phones)
    {
   phones.classList.add('hidden');
    }

    makeup=document.getElementById('inner-images-2');
        if(makeup)
       {
      makeup.classList.add('hidden');
       }

     shoes=document.getElementById('inner-images-5');
       if(shoes)
      {
     shoes.classList.add('hidden');
      }
 
sea=document.getElementById('inner-images-7');
   if(sea)
  {
 sea.classList.add('hidden');
  }

  places=document.getElementById('inner-images-8');
  if(places)
 {
places.classList.add('hidden');
 }

 interior=document.getElementById('inner-images-9');
 if(interior)
{
interior.classList.add('hidden');
}
 }          
 }
 else if(input==='sea')
                {
                  const sea=document.getElementById('inner-images-7');
                  if(sea)
                 {
                  
                  sea.classList.remove('hidden');
                  Clothes=document.getElementById('inner-images-1');
                  if(Clothes)
                 {
                Clothes.classList.add('hidden');
                 }
                gadgets=document.getElementById('inner-images-3');
                if(gadgets)
               {
              gadgets.classList.add('hidden');
               }
          
               phones=document.getElementById('inner-images-4');
               if(phones)
              {
             phones.classList.add('hidden');
              }
          
              makeup=document.getElementById('inner-images-2');
                  if(makeup)
                 {
                makeup.classList.add('hidden');
                 }
          
               hills=document.getElementById('inner-images-6');
                 if(hills)
                {
               hills.classList.add('hidden');
                }
           
          shoes=document.getElementById('inner-images-5');
             if(shoes)
            {
           shoes.classList.add('hidden');
            }
          
            places=document.getElementById('inner-images-8');
            if(places)
           {
          places.classList.add('hidden');
           }
          
           interior=document.getElementById('inner-images-9');
           if(interior)
          {
          interior.classList.add('hidden');
          }
          
          }
             }

 else if(input==='places')
                  {
              
                    const places=document.getElementById('inner-images-8');
                   if(places)
                   {
                    
                    places.classList.remove('hidden');
                    Clothes=document.getElementById('inner-images-1');
                    if(Clothes)
                   {
                  Clothes.classList.add('hidden');
                   }
                  gadgets=document.getElementById('inner-images-3');
                  if(gadgets)
                 {
                gadgets.classList.add('hidden');
                 }
            
                 phones=document.getElementById('inner-images-4');
                 if(phones)
                {
               phones.classList.add('hidden');
                }
            
                makeup=document.getElementById('inner-images-2');
                    if(makeup)
                   {
                  makeup.classList.add('hidden');
                   }
            
                 hills=document.getElementById('inner-images-6');
                   if(hills)
                  {
                 hills.classList.add('hidden');
                  }
             
            sea=document.getElementById('inner-images-7');
               if(sea)
              {
             sea.classList.add('hidden');
              }
            
              shoes=document.getElementById('inner-images-5');
              if(shoes)
             {
            shoes.classList.add('hidden');
             }
            
             interior=document.getElementById('inner-images-9');
             if(interior)
            {
            interior.classList.add('hidden');
            }
            
            }
              
           }

            else if(input==='interior')
                    {
                      const interiordesign=document.getElementById('inner-images-9');
                        if(interiordesign)
                     {
                      
                      interiordesign.classList.remove('hidden');
                      Clothes=document.getElementById('inner-images-1');
                       if(Clothes)
                      {
                     Clothes.classList.add('hidden');
                      }

                      makeup=document.getElementById('inner-images-2');
                      if(makeup)
                     {
                    makeup.classList.add('hidden');
                     }

                     gadgets=document.getElementById('inner-images-3');
                     if(gadgets)
                    {
                   gadgets.classList.add('hidden');
                    }

                    phones=document.getElementById('inner-images-4');
                    if(phones)
                   {
                  phones.classList.add('hidden');
                   }

                   shoes=document.getElementById('inner-images-5');
                       if(shoes)
                      {
                     shoes.classList.add('hidden');
                      }

                    hills=document.getElementById('inner-images-6');
                      if(hills)
                     {
                    hills.classList.add('hidden');
                     }
                     sea=document.getElementById('inner-images-7');
                     if(sea)
                    {
                   sea.classList.add('hidden');
                    }
                    places=document.getElementById('inner-images-8');
                    if(places)
                   {
                  places.classList.add('hidden');
                   }
       }
              
                    }
    else if(input === 'animals')
      {
      
        window.location.href = 'index5.html';
      }
  else
  {
      alert('No results found');
  }
});



/*document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.container');

  const scrollAnimation = () => {
      containers.forEach(container => {
          const containerPosition = container.getBoundingClientRect().top;
          const screenPosition = window.innerHeight;

          if (containerPosition < screenPosition) {
              const img = container.querySelector('img');
              img.classList.add('animate');
          }
      });
  };

  window.addEventListener('scroll', scrollAnimation);
});*/


// Function to check if an element is in viewport
/*function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scrolling and adding animation class
function handleScroll() {
  const innerSets = document.querySelectorAll('.inner-set');
  
  innerSets.forEach(innerSet => {
    if (isInViewport(innerSet)) {
      innerSet.classList.add('slide-in');
    } else {
      innerSet.classList.remove('slide-in');
    }
  });
}

// Add scroll event listener to trigger animation
window.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
  handleScroll();
});
*/
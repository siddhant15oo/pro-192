AFRAME.registerComponent('clicked',{
    init:function(){
        this.el.addEventListener('markerFound',()=>{
            console.log('found')
            this.openMovie()
        })
    },
    openMovie:function(){
        
        var M1Button=document.getElementById('button1')
        M1Button.addEventListener('click',()=>{
            swal({
                title: "Inception",
                text: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
                icon: "../assets/M1inception.png",
                button: "Got It!"
              });
        })

        var M2Button=document.getElementById('button2')
        M2Button.addEventListener('click',()=>{
            swal({
                title: "Doctor Strange",
                text: "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.",
                icon: "../assets/M2DoctorStrange.png",
                button: "Got It!"
              });
        })

        var M3Button=document.getElementById('button3')
        M3Button.addEventListener('click',()=>{
            swal({
                title: "Cars 2",
                text: "Star racecar Lightning McQueen and his friend Mater journey abroad to participate in a Grand Prix race. The path to the championship becomes troublesome when Mater gets involved in espionage.",
                icon: "../assets/M3Cars2.png",
                button: "Got It!"
              });
        })

        var M4Button=document.getElementById('button4')
        M4Button.addEventListener('click',()=>{
            swal({
                text: 'Search for a movie. e.g. "La La Land".',
                content: "input",
                button: {
                  text: "Search!",
                  closeModal: false,
                },
              })
              .then(name => {
                if (!name) throw null;
               
                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
              })
              .then(results => {
                return results.json();
              })
              .then(json => {
                const movie = json.results[0];
               
                if (!movie) {
                  return swal({
                      text:"No movie was found!",
                      icon:"error"
                    });
                }
               
                const name = movie.trackName;
                const imageURL = movie.artworkUrl100;
               
                swal({
                  title: "Top result:",
                  text: name,
                  icon: imageURL,
                });
              })
              .catch(err => {
                if (err) {
                  swal("Oh noes!", "The AJAX request failed!", "error");
                } else {
                  swal.stopLoading();
                  swal.close();
                }
              });
        })


    }
})
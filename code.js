let naki = [
    {film:"The Red Turtle" , director:"Michaël Dudok de Wit"},
    { film : "When Marnie Was There" , director:"Hiromasa Yonebayashi"},
    { film : "Arrietty" , director: "Hiromasa Yonebayashi"},
    { film : "Earwig and the Witch" , director:"Gorō Miyazaki"},
    { film : "From Up on Poppy Hill" , director:"Gorō Miyazaki"},
    { film : "Tales from Earthsea" , director:"Gorō Miyazaki"},
    { film : "The Cat Returns" , director:"Hiroyuki Morita"},
    { film : "Whisper of the Heart" , director:"Yoshifumi Kondō"},
    { film : "The Tale of the Princess Kaguya" , director:"Isao Takahata"},
    { film : "My Neighbors the Yamadas" , director:"Isao Takahata"},
    { film : "Pom Poko" , director:"Isao Takahata"},
    { film : "Only Yesterday" , director:"Isao Takahata"},
    { film : "Grave of the Fireflies" , director:"Isao Takahata"},
    { film : "The Wind Rises" , director:"Hayao Miyazaki"},
    { film : "Ponyo" , director:"Hayao Miyazaki"},
    { film : "Howl's Moving Castle" , director:"Hayao Miyazaki"},
    { film : "Spirited Away" , director:"Hayao Miyazaki"},
    { film : "Princess Mononoke" , director:"Hayao Miyazaki"},
    { film : "Porco Rosso" , director:"Hayao Miyazaki"},
    { film : "Kiki's Delivery Service" , director:"Hayao Miyazaki"},
    { film : "My Neighbor Totoro" , director:"Hayao Miyazaki"},
    { film : " Castle in the Sky" , director:"Hayao Miyazaki"}
    ];

    let filmsByElement = document.getElementById("filmsBy");
    let directorsElement = document.getElementById("directors");
    let directorsfilmsListElement = document.getElementById("directorsfilmsList");


    let miyazaki = naki.filter((elt) => elt.director=="Hayao Miyazaki");
    for(let {film} of miyazaki){
        console.log(film);
        let li = document.createElement("li");
            li.textContent = film.split(" : ")[0];
            filmsByElement.appendChild(li);
    } 

    let realisateurs =naki.reduce((a , {director})=> new Set([...a,director]),new Set())
    console.log(realisateurs) ;


    let directeur = naki.reduce((acc,curr)=>{
        if(!acc[curr.director]) acc[curr.director]=[];
        acc[curr.director].push(curr.film);
        return acc ;
    },{});
   // for(let v of Object.entries (directeur) ){
    console.log(directeur) ; 
    for (let realisateur in directeur) {
        let filmsDuRealisateur = directeur[realisateur];
        var filmsDuRealisateurText = realisateur + "<ul>";

        filmsDuRealisateur.forEach(function(film) {
            filmsDuRealisateurText += "<li>" + film + "</li>";
        });

        filmsDuRealisateurText += "</ul>";
        var li = document.createElement("li");
        li.innerHTML = filmsDuRealisateurText;
        directorsfilmsListElement.appendChild(li);
    }

let listeRealisateursElement =document.getElementById("directors");

   realisateurs.forEach(function(realisateur) {
      let li =document.createElement("li");
      li.textContent = realisateur; 
      listeRealisateursElement.appendChild(li); 
   });
  

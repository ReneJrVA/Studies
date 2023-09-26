function returnNaam(name, age) {
    console.log(name, this.job, this.stad)
}

//length
returnNaam.length; // 2 => lengte van de parameters
returnNaam.name; // returnNaam

//Belangrijkste methodes

returnNaam.call({job: 'Developer', stad: 'Antwerpen'},'Rene', 26)
                //uitgevoerd in een functoe die een nieuwe waarde geeft aan this
                //=> Voor je de parameters van de functie geeft, geef je de waarden van this

returnNaam.apply({job: 'Developer', stad: 'Antwerpen'},['Rene', 26])
                    //Uitgevoerd als functie die een nieuwe waarde geeft aan this
                    //=> Nu zijn de argumenten in een array geplaatst.

const nieuweFunctie = returnNaam.bind({job: 'Developer', stad: 'Antwerpen'},'Rene', 26)
                    //Returns een funtie die een nieuwe waarde aan this geeft.
                    //Als je het in de console wilt zien, moet je een functie maken en uitvoeren.
nieuweFunctie()
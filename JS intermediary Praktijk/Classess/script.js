class Zoogdier {
    constructor (poten){
        this.soort = 'Zoogdier'
    }
    dormir(){
        alert('Dit zoogdier slaapt.')
    }
}


class Persoon extends Zoogdier {
    constructor (name, age){
        super(poten);
        this.name = name;
        this.age  = age;
        this.city = 'Antwerp';
        this.walk = () => alert('Walked');
    }
    slapen(){
        super.slapen();
    }

    wandelen (){
        alert('$(this.name)stapt')
    }
}

const Persoon1 = new Persoon ('René', 26);
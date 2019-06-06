import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chuckNorris = 'Here goes chuck Norris';
  chuckList = {id:Number,joke:''}
  favsList = []

  ngOnInit(){
    this.showFavs()
  }

  showFavs(){

    let url = 'http://localhost:3002/facts/all'

    fetch(url)
    .then(function (res) {
      return res.json()
  })
    .then((data) => {
      this.favsList = data
      console.log(this.favsList)
  }).catch(function (err) {
    console.error(err)
    })    
  }


  onClickGenerate(){
    let url = 'http://api.icndb.com/jokes/random'


    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then((data) => {
        this.chuckList = {id:data.value.id,joke:data.value.joke}
        console.log(data) 
        console.log('after stuff', this.chuckList) 
        this.ngOnInit()
    }
    ).catch(function (err) {
        console.error(err)
    })    
   
    }

    onClickFavorite(){

      let url = 'http://localhost:3002/facts/new'

      let data = this.chuckList

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
        this.ngOnInit()
        console.log('Success:', JSON.stringify(response))}
        )
      .catch(error => console.error('Error:', error))

      
      console.log('got here to create a favorite')
      

    }

    onClickDelete(key){

      let url = 'http://localhost:3002/facts/delete'

      let data = this.favsList[key.key]
      
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
        this.ngOnInit()
        console.log('Success:', JSON.stringify(response))}
        )
      .catch(error => console.error('Error:', error));


      console.log('got here to delete a favorite', this.favsList[key.key].Id)

      
    }
    

    }
  


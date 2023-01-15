const container=document.queryselector('.container')
const seats=document.querySelectorAll('.row,seat:not.occupied');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieselect=document.getElementById('movie')
let ticketprice=+movieselect.value;
//save selected movie index and price
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectdMovie index',movieindex);
    localStrong.setItem('selectedMovie',moviePrice);
}
//update total and count
function updateSelectedCount(){
    const selectedSeats =document.querySelectorAll('.row.seat.selected');
    const seatsIndex=[selectedSeats].map((seat)=>[seats].indexOf(seat));
    //copy selected seats into arr
    //map through array
    //return new array of indexes
    const selectedSeatsCount=selectedSeats.length;
    count.innerText=selectedSeats.length;
    count.innerText=selectedSeats.length;
    total.innerText=selectedSeatsCount*ticketprice;
}
//get data from localstronge and populate ui
function populateUI(){
    const selectedSeats=JSON.parse(localStrong.getItem('selectedSeat'));
    if(selectedSeats!==null&&selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
            }
         });
    }
    const SelectedMovieIndex=localStorage.getItem('selectedmovieIndex');
    if(selectedMovieIndex !==null){
        movieSelect.selectedIndex=selectedMovie;
    }
}
//Movie Select event 
movieSelect.addEventListener('change',(e)=>
{
    ticketPrice=+e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);  
    updateSelectedCount();
});
//seat clickevent
container.addEventListner('click',(e)=>
{
    if(e.target.classList.contains('seat')
    &&!
    e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});
//intial countand total
updateSelectedCount();

container.addEventListener('click',(e)=>{

    if(e.target.classlist.contains('seat') && !e.target.classlist.container);
    e.target.classlist.toggle('selected');

})
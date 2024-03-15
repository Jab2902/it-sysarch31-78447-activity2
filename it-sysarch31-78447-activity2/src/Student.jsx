import Card from "./Card";
import Cute1 from './images/Cute1.jpg'
import Cute2 from './images/Cute2.jpg'
import Cute3 from './images/Cute3.jpg'
import Cute4 from './images/Cute4.jpg'
import Cute5 from './images/Cute5.jpg'
import './styles/Student.css'
const students = [
    {id: 1, name: "Alex Morgan", image: Cute1, email:"Lexus.gmail.com"},
    {id: 2, name: "Stephanie Cloud", image: Cute3, email:"Stcloud.gmail.com"},
    {id: 3, name: "John Nicolas", image: Cute4, email:"Jolas.gmail.com"},
    {id: 4, name: "Max Sumber", image: Cute2, email:"Zshhko.gmail.com"},
    {id: 5, name: "Hilbert Queenstone", image: Cute5, email:"Quentone.gmail.com"},
  ];
export default function Student(){
        return(
            <div className="card-container">
                {students.map(student => (
                    <Card key={student.id} student={student} />
                ))}
            </div>
        );
}
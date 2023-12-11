
import './App.css'
import Card from './components/card'


function App() {

  return (
    <div className='App' >
      <Card imgSrc="https://picsum.photos/id/16/300/200" imgAlt="card img 16" title="Card Title img16" description="This is the description of Card.You can add more detailes to this description" link="cardPage" buttonText="Learn More"/>
      
      <Card imgSrc="https://picsum.photos/id/17/300/200" imgAlt="card img 17" title="Card Title img17" description="This is the description of Card.You can add more detailes to this description" link="cardPage" buttonText="Learn More"/>

      <Card imgSrc="https://picsum.photos/id/18/300/200" imgAlt="card img 18" title="Card Title img18" description="This is the description of Card.You can add more detailes to this description" link="cardPage" buttonText="Learn More"/>

      <Card imgSrc="https://picsum.photos/id/19/300/200" imgAlt="card img 19" title="Card Title img19" description="This is the description of Card.You can add more detailes to this description" link="cardPage" buttonText="Learn More"/>

      <Card imgSrc="https://picsum.photos/id/27/300/200" imgAlt="card img 27" title="Card Title img27" description="This is the description of Card.You can add more detailes to this description" link="cardPage" buttonText="Learn More"/>

    </div >
  )
}

export default App

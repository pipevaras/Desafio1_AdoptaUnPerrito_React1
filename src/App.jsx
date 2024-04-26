import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header title="Adopta un Perrito" />
      <div className="dogs">
        <MyCard
          dogImage="https://cdn.pixabay.com/photo/2018/10/07/21/43/dog-3731444_1280.jpg"
          dogName="Patroclo"
          dogDescription="Perrito genial con una muy bonita energia."
          colorBadge="primary"
          textBadge="Amigable"
        />
        <MyCard
          dogImage="https://cdn.pixabay.com/photo/2020/04/08/01/11/dog-5015364_960_720.jpg"
          dogName="Chiroque"
          dogDescription="Perrito juguetón que solo piensa en que le tires su pelota."
          colorBadge="warning"
          textBadge="Enérgico"
        />
        <MyCard
          dogImage="https://cdn.pixabay.com/photo/2017/09/30/02/51/dog-2801069_1280.jpg"
          dogName="Elfita"
          dogDescription="Perrita tranquila que le gusta dormirse en todos lados."
          colorBadge="danger"
          textBadge="Pasiva"
        />
        <MyCard
          dogImage="https://cdn.pixabay.com/photo/2017/10/14/22/06/dog-2852009_960_720.jpg"
          dogName="Ginger"
          dogDescription="Perrita comilona y que se pone muy feliz cuando le das su almuerzo."
          colorBadge="info"
          textBadge="Cuidadora"
        />
      </div>
      <Footer foot="Estos perritos buscan un hogar para darte todo su amor, a cambio ellos esperan igualmente que tú los ames." />
    </div>
  )
}

export default App

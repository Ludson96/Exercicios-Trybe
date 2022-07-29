import React from "react";

class Teste extends React.Component {
  render() {
    const { picture, name, email, age } = this.props;
    return (
      <main>
        <div>
          {/* {console.log('Teste correto:', picture)} */}
          <img src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=2000" alt='te' />
        </div>

        <div>
          {name}
        </div>

        <div>
          {email}
        </div>

        <div>
          {age}
        </div>
      </main>
    )
  }
}

export default Teste;
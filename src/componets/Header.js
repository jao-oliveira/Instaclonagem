import {useEffect, useState} from 'react';
import Logo from '../imgs/Instagram-Logo.png'



function Header(props){
    
  useEffect(function(){
      

  },[])

  function abrirModalCriarConta(e){
    e.preventDefault();
    
    let modal = document.querySelector('.modalCriarConta');
    modal.style.display = "flex";

  }

  function fecharModalCriar(){
    let modal = document.querySelector('.modalCriarConta');
    modal.style.display = "none";
  }


  

    return(
      <div className='header'> 

      <div className='modalCriarConta'> 
        
        <div className='formCirarConta'>
        <div className='close-modal-cliar'>
          x
        </div>
          <img src={Logo}></img>
          <h1>Cadastre-se</h1> 
          <form>
            <input type='text' placeholder='Seu e-mail...'/>
            <input type='text' placeholder='Seu Username...'/>
            <input type='password' placeholder='Sua senha...'/>
          </form>
          <input type='submit'value='Cadstre-se'></input>
          
          <div   className='ja-tem-conta'>
            <a href='#' onClick={()=>fecharModalCriar()}>Já tem conta?</a>
          </div>
        </div>
        
      
      </div>


        <div className='center'>
          


              {
                (props.user)?
                <div className='header_logadoInfo'>
                  <span>Olá, <b>{props.user}</b></span> |
                  <a href='#'>Postar</a>
                </div>
                :
                <div className='header_loginForm'>
                  <form>
                    <div className='header_Logo'>
                      <a href=''><img src={Logo} alt="logo instagram" title='logo instagram'/></a>
                    </div>
                    <input type='text' placeholder='Nome de usuário ou email'  />
                    <input type='password' placeholder='senha'  />
                    <input type='submit' name='acao' value='logar!' />

                    <div className='esqueceuSenha'>
                    <a href='#'>Esqueceu a senha?</a>
                    </div>
                  </form>
                  
                
                  <div className='btn_criar_conta'>
                    <p>Não tem uma conta ainda?</p>
                    <a onClick={(e)=>abrirModalCriarConta(e)} href='#' >Cadastre-se</a>
                  </div>
                </div>
            }

        </div>
      </div>
    )
}
  
 
  

export default Header;
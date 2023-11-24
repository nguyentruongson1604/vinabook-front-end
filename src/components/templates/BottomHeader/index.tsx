import styles from './style.module.css'
import Logo from '../../elements/Logo'
import FormWrapper from '../../elements/FormWrapper'
import LogoCard from '../../elements/LogoCard'
import Login from '../../elements/Login'
import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../../stores/RootStore.store'
const BottomHeader = observer(() => {
    const store = useStore()
    const accessToken = store.CartStore?.getAccessToken
    const fetchCart = async (accessToken: string) => {
        // console.log(accessToken)
        if(accessToken){
          Promise.all([await store.CartStore?.getCart()])
        }
        else{
          // console.log('here')
          const cart = localStorage.getItem('cart')
          if(cart){
              store.CartStore?.setCurrentCart(JSON.parse(cart))
              // console.log('here', store.CartStore?.getCurrentCart)
          }
          else{
            store.CartStore?.setCurrentCart({
              _id: 'guest',
              listBook: []
            })
            localStorage.setItem('cart', JSON.stringify({
              _id: 'guest',
              listBook: []
            }))
          }
        }
      }
    useEffect(()=>{
        fetchCart(accessToken!)
    }, [accessToken])
    return(
        <div className={styles.bottomHeader}>
            <div className="container">
                <Logo/>
                <FormWrapper/>
                <LogoCard/>
                <Login/>
            </div>
            <div className="clearfix"></div>
        </div>
        
    )
})

export default BottomHeader
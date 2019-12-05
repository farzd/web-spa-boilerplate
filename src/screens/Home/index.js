import React, { useContext } from 'react'
import './Home.scss'
import Button from '../../components/Button'
import { StoreContext } from '../../utils/store'
import { H1, H2, H3, H4, P, A } from '../../components/Text'

function Home() {
  const [state, dispatch] = useContext(StoreContext)
  const { popup } = state

  return (
    <div>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <P>
        Paragraph, <A>Anchor</A>
      </P>
      <P>
        <Button
          onClick={() => dispatch({ type: 'displayPopup', payload: !popup })}
        >
          Toggle State
        </Button>
      </P>
      <P>{popup.toString()}</P>
    </div>
  )
}

export default Home

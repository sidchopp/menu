import React from 'react'
import { Header, Image, Icon, Divider, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Head = () => (
  <div >
    <Segment style={{ backgroundColor: '#c59d5f' }} clearing>
      <Header style={{ color: 'black' }} floated='left' as='h1' icon='utensils' content=' La cuisine de Purva' />
      <Header as='h2' floated='right'>
        <a href="https://github.com/sidchopp/menu" target="_blank"> <Icon color='black' name=' github square' size='large' /></a>
        <a href="https://www.linkedin.com/in/sidchopp/" target="_blank"> <Icon color='black' name='linkedin' size='large' /></a>
      </Header>

    </Segment>

  </div>
)

export default Head
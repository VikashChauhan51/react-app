import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex, Text, Button } from "@radix-ui/themes";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons"

function App() {
   

  return (
    <>
    <Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
      <div>
			<FaceIcon color='green' />
			<SunIcon color='red' />
			<ImageIcon color='blue' />
		</div>
		</Flex>
    </>
  )
}

export default App

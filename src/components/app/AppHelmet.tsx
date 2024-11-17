import React from 'react'
import { Helmet } from 'react-helmet'

const AppHelmet: React.FC = () => {
  return (
    <Helmet>
      <title>Skarb Game</title>
      <meta
        name="description"
        content="Get ready for an exciting mix of team games, quizzes, and fun challenges that test your knowledge and creativity. Whether you're here to compete, collaborate, or simply have fun, we've got something for everyone."
      />
      <meta property="og:title" content="Skarb Game" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="650" />
      <meta property="og:image:height" content="340" />
      <meta
        property="og:description"
        content="Get ready for an exciting mix of team games, quizzes, and fun challenges that test your knowledge and creativity. Whether you're here to compete, collaborate, or simply have fun, we've got something for everyone."
      />
      <meta property="og:locale" content="en_GB" />
    </Helmet>
  )
}

export default React.memo(AppHelmet)

import React, { useState } from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import designLanguage from "../design-language"
import { Header } from "./Header"
import GlobalStyle from "../design-language/styles/GlobalStyles"
export default function Container({ children }) {
  let [isDark, setIsDark] = useState(
    typeof window !== "undefined" ? localStorage.getItem("rp/theme") : null
  )

  if (isDark === null) {
    setIsDark("dark")
  }

  const toggleTheme = () => {
    if (isDark === "dark") {
      if (typeof window !== "undefined") {
        localStorage.setItem("rp/theme", "light")
      }
      setIsDark("light")
    } else {
      if (typeof window !== "undefined"){
        localStorage.setItem("rp/theme", "dark")
      }

      setIsDark("dark")
    }
  }

  return (
    <ThemeProvider theme={isDark === "dark" ? designLanguage.dark : designLanguage.light} >
      <GlobalStyle />

      <Header toggleTheme={toggleTheme} isDark={isDark} />

      <StyledContainer id="container">{children}</StyledContainer>
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

const StyledContainer = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: ${props => props.theme.breakpoints[1]};
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2rem;
  margin-bottom: 2rem;
  h1 {
    font-size: ${props => props.theme.fontSizes[13]};
    color: ${props => props.theme.body.title.foreground};
  }
  p {
    color: ${props => props.theme.body.description.foreground};
    line-height: 1.6rem;
  }
  h2 {
    font-size: ${props => props.theme.fontSizes[10]};

    color: ${props => props.theme.body.title.foreground};
  }
  h3 {
    font-size: ${props => props.theme.fontSizes[7]};
    color: ${props => props.theme.body.title.foreground};
  }
  h4 {
    font-size: ${props => props.theme.fontSizes[6]};
    color: ${props => props.theme.body.title.foreground};
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: ${props => props.theme.fontSizes[11]};
    }
    h2 {
      font-size: ${props => props.theme.fontSizes[8]};
    }
    h3 {
      font-size: ${props => props.theme.fontSizes[5]};
    }
    h4 {
      font-size: ${props => props.theme.fontSizes[5]};
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: ${props => props.theme.fontSizes[9]};
    }
    h2 {
      font-size: ${props => props.theme.fontSizes[7]};
    }
    h3 {
      font-size: ${props => props.theme.fontSizes[5]};
    }
    h4 {
      font-size: ${props => props.theme.fontSizes[4]};
    }
  }
`

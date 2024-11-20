import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import  { Navbar } from "./components/navbar";
 
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
  )
}
 
export default App
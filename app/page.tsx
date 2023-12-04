import Image from 'next/image'
import { TiRefresh } from "react-icons/ti";
import { GoHomeFill } from "react-icons/go";
import { FaShare } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1>Jogo da Velha</h1>
      <h2>jogue com moderação</h2>
      <table>
        <tbody>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
      <div className='buttom'>
        <a  href="/"> <TiRefresh /> </a>
        <a href="/"> <GoHomeFill /> </a>
        <a href="/"> <FaShare /> </a>
      </div>
    </div>
  )
}

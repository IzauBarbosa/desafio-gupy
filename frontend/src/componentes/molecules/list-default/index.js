import {
  Ul,
  Li } from '../../atoms';
import { Styles } from './styles';

export const ListDefault = ({ items }) => {

  return (
    <Styles>
      <Ul>
        {items.map(({ content }, index) => (
          <Li key={`list-${index}`}>
            {content}
          </Li>
        ))}
      </Ul>
    </Styles>
  )
}
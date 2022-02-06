import * as React from 'react';
import { palette, spacing } from '@mui/system';
import styled from 'styled-components';

//все компоненты mui определены через styled

//создаем  элементы в styled, которые можно будет (до)определить
const Div = styled.div`
  ${palette}
  ${spacing}
`;

export default function CombiningStyleFunctionsDemo() {
  return (
    <>
      <Div color="white" bgcolor="palevioletred" p={1}>
        Styled components
      </Div>
    </>
  );
}

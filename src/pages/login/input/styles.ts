import styled, { css } from 'styled-components'
import { Status } from '.'

type InputProps = {
  status: Status
}

const InputModifiers = {
  check: () => css`
    border: 1.5px solid #34C38F;
  `,
  invalid: () => css`
    border: 1.5px solid #FA982F;
  `,
  empty: () => css``,
}

export const Wrapper = styled.div`
  position: relative;

  span {
    display: flex;
    align-items: center;
    position: absolute;
    right: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Input = styled.input<InputProps>`
  ${({ theme, status }) => css`
    width:100%;
    border: ${theme.border.sizes.small} solid ${theme.colors.gray200};
    display: inline-block;
    height: 3.6rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.gray100};
    color: ${theme.colors.gray300};
    padding: 1.6rem;
    font-weight: ${theme.font.weight.normal};
    outline: 0;

    ${!!status && InputModifiers[status]};
  `}
`

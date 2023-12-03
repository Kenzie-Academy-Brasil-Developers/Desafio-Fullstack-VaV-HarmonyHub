import styled, { css } from 'styled-components';

export interface iStyledButtonProps {
  buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  border-radius: var(--radius3);
  transition: 0.8s;

  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case 'Sign-in':
        return css`
          width: min(100%, 850px);
          height: 45px;
          background-color: var(--color-primary);
          border: 0.8px solid var(--color-tertiary);
          border-radius: var(--radius2);
          font-size: clamp(var(--font-size7), 3vw, var(--font-size5));
          color: #ffffff;

          &:hover {
            background-color: var(--color-secondary);
            border-color: var(--color-secondary);
          }
        `;
      case 'Join':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: #2a5296;
        `;
      case 'delete':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;

          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: var(--color-gray300);
        `;
      case 'closeModal':
        return css`
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: none;
          font-size: clamp(var(--font-size7), 3vw, var(--font-size5));
          color: var(--color-gray300);

          &:hover {
            color: var(--color-primary);
          }
        `;
      case 'editProfile':
        return css`
          gap: 5px;
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: #e5e1df;
        `;
      case 'addContact':
        return css`
          gap: 5px;
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-size: clamp(var(--font-size5), 6vw, var(--font-size2));
          color: var(--color-shade300);
        `;
      case 'editContact':
        return css`
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
          background-color: #e5e1df;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));

          &:hover {
            background-color: var(--color-primary);
            color: #e5e1df;
          }
        `;
      case 'logout':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-size: clamp(var(--font-size7), 4vw, var(--font-size5));
          color: #e5e1df;
        `;
    }
  }}
`;

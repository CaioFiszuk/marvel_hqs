import { Container } from './styles';
function Button({ children, variant, ...rest }) {

  return (
    <Container className={variant} {...rest}>
      {children}
    </Container>
  );
}

export default Button;
import {
  ShortenButton,
  ShortenContainer,
  ShortenInput,
} from "./Shorten.styles";

export default function Shorten() {
  return (
    <ShortenContainer>
      <ShortenInput placeholder="Shorten a link here..." />
      <ShortenButton>Shorten It!</ShortenButton>
    </ShortenContainer>
  );
}
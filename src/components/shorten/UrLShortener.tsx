import { useState } from "react";
import { shortenUrl } from "../../redux/shortener/shortenerThunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ShortenButton,
  ShortenContainer,
  ShortenInput,
  ShortenedUrlCard,
} from "./Shorten.styles";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../redux/shortener/store";
import { Typography, Container, Button, Box } from "@mui/material";

export default function Shorten() {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const { urls, isLoading } = useAppSelector((state: RootState) => state.url);

  const handleShortenUrl = async () => {
    if (!originalUrl.trim()) {
      setError("Please add a link");
      return;
    }
    setError("");
    dispatch(shortenUrl(originalUrl));
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL Copied!");
  };

  return (
    <>
      <ShortenContainer>
        <ShortenInput
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Shorten a link here..."
          value={originalUrl}
          style={{
            borderColor: error ? "red" : "initial",
          }}
        />
        {error && (
          <Typography
            variant="body2"
            color="error"
            style={{ marginTop: "-2px", color: "red" }}
          >
            {error}
          </Typography>
        )}
        <ShortenButton onClick={handleShortenUrl}>
          {isLoading ? "Loading..." : "Shorten It!"}
        </ShortenButton>
      </ShortenContainer>
      {urls?.length > 0 && (
        <ListGroup>
          {urls.map((url, index) => (
            <ListGroupItem key={index}>
              <ShortenedUrlCard key={index}>
                <Container
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      flexGrow: 1,
                    }}
                  >
                    <Typography variant="body1">{url.original}</Typography>
                  </Box>
                  <Typography variant="body2" color="primary">
                    {url.shortened}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleCopy(url.shortened)}
                    sx={{
                      fontWeight: "bold",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      marginTop: "auto",
                    }}
                  >
                    Copy
                  </Button>
                </Container>
              </ShortenedUrlCard>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
      <ToastContainer />
    </>
  );
}

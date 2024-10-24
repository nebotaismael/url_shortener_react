import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  /* Basic reset and global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Add this for better layout handling */
    font-family: 'Montserrat', 'Inter', 'Poppins', sans-serif;
  }

  body {
    /* Optional: Set a base font size for better responsiveness */
    font-size: 16px; 
  }

  img {
    max-width: 100%;
    height: auto; /* Maintain aspect ratio */
  }

  a {
    text-decoration: none;
    color: white;
  }

  /* Quill Editor Styles */
  .ql-toolbar.ql-snow {
    border: 1px solid #E8E9EB;
    border-radius: 10px 10px 0 0;
    background-color: #F8F8F8;
  }
.hidden {
  display: none;
}
  .ql-container.ql-snow {
    border: 1px solid #E8E9EB;
    border-radius: 0 0 10px 10px;
  }

  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    height: 158px;
  }
`;



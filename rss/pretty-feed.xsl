<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet 
    version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />

  <!-- === Root template === -->
  <xsl:template match="/rss/channel">
    <html>
      <head>
        <title><xsl:value-of select="title" /></title>
        <meta charset="UTF-8" />
        <style>
          body {
            font-family: system-ui, sans-serif;
            margin: 2rem auto;
            max-width: 700px;
            padding: 0 1.2rem;
            background: #fafafa;
            color: #1e1e1e;
            line-height: 1.7;
          }
          h1 {
            font-size: 2rem;
            margin-bottom: 0.3rem;
            color: #D63C3C; /* Novi red */
          }
          .description {
            font-size: 1.1rem;
            color: #5B5F66; /* Kernel gray */
            margin-bottom: 2rem;
          }
          ul {
            list-style: none;
            padding-left: 0;
          }
          li {
            padding: 1rem 1rem 1.2rem;
            margin-bottom: 1.4rem;
            border-radius: 12px;
            background: white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.06);
            transition: transform 0.2s ease;
          }
          li:hover {
            transform: translateY(-3px);
          }
          .item-title {
            font-size: 1.25rem;
            color: #4C6A7F;
            font-weight: 600;
            text-decoration: none;
          }
          .item-date {
            font-size: 0.9rem;
            color: #7D8B94;
            margin-top: 0.2rem;
            margin-bottom: 0.7rem;
          }
          .item-desc {
            color: #444;
          }
        </style>
      </head>

      <body>
        <h1><xsl:value-of select="title" /></h1>
        <div class="description"><xsl:value-of select="description" /></div>

        <ul>
          <xsl:for-each select="item">
            <li>
              <a class="item-title" href="{link}">
                <xsl:value-of select="title" />
              </a>

              <div class="item-date">
                <xsl:value-of select="pubDate" />
              </div>

              <div class="item-desc">
                <xsl:value-of select="description" />
              </div>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

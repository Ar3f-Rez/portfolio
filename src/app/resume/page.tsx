import React from "react";
import { Row, Text, Button } from "@once-ui-system/core";

const ResumePage = () => {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      
      {/* Header */}
      <Row gap="12" vertical="center" style={{ justifyContent: "space-between" }}>
        <Text variant="body-strong-xl" weight="strong">
          Resume
        </Text>

        <Button
          variant="primary"  // ✅ fixed
          size="md"
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          Download PDF
        </Button>
      </Row>

      {/* PDF Embed */}
      <div style={{ width: "100%", height: "80vh", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="100%"
          style=

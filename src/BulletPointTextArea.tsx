import React, { useEffect, useRef } from 'react';
import './BulletPointTextArea.css';

interface BulletPointTextAreaProps {
  description: string;
}

const BulletPointTextArea: React.FC<BulletPointTextAreaProps> = ({ description }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Split the description into sentences based on periods
  const sentences = description.split('. ').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);

  // Convert sentences to bullet points with bolded text for phrases wrapped in ~
  const bulletPoints = sentences.map(sentence => {
    // Replace ~text~ with <strong>text</strong> for bold text
    return sentence.replace(/~(.*?)~/g, '<strong>$1</strong>');
  }).map(point => `• ${point}`).join('<br>');

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      // Set the innerHTML of the content div
      content.innerHTML = bulletPoints;
    }
  }, [description, bulletPoints]);

  return (
    <div>
      <div
        ref={contentRef}
        className="bullet-point-textarea"
        contentEditable={false}  // Make this div read-only
      />
    </div>
  );
};

export default BulletPointTextArea;

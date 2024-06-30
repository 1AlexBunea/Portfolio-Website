import React, { useEffect, useRef } from 'react';
import './BulletPointTextArea.css';

interface BulletPointTextAreaProps {
  description: string;
}

const BulletPointTextArea: React.FC<BulletPointTextAreaProps> = ({ description }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Split the description into sentences based on periods
  const sentences = description.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);

  // Remove periods and commas from the end of each sentence
  const cleanedSentences = sentences.map(sentence => sentence.replace(/[.,\s]*$/, ''));

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Set the height to auto first to reset any previous height settings
      textarea.style.height = 'auto';
      // Then set the height based on the scroll height
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [description]);

  return (
    <div>
      <textarea 
        readOnly
        ref={textareaRef}
        value={cleanedSentences.map(point => `• ${point}`).join('\n')}
        className="bullet-point-textarea"
      />
    </div>
  );
};

export default BulletPointTextArea;

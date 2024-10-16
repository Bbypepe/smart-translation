import React, { useState } from 'react';
import { ThemedText } from './ThemedText'; // Import ThemedText component
import { ThemedView } from './ThemedView'; // Import ThemedView component

const Collapsible: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ThemedView>
            <ThemedText onPress={() => setIsOpen(!isOpen)}>
                {title}
            </ThemedText>
            {isOpen && <div>{children}</div>}
        </ThemedView>
    );
};

export default Collapsible;

import React from 'react';
import { Button, Dialog, Paragraph, Portal, Provider } from 'react-native-paper';
import styles, { textDialogTheme } from './styles';

interface ITextDialogProps {
    title?: string,
    onCancel: any,
    onAccept: any,
    onDismiss: any,
    isVisible: boolean,
    content: any,
    acceptTitle: string,
}

export default function TextDialog({ title, content, acceptTitle, onDismiss, onCancel, onAccept, isVisible } : ITextDialogProps ) {
    return (
        <Portal>
        <Provider>
            <Dialog visible={isVisible} onDismiss={onDismiss}>
                {
                    title && true ?
                    <Dialog.Title>
                    {title}
                </Dialog.Title>
                :
                null
                }
                <Dialog.Content>
                    <Paragraph>
                        {content}
                    </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={onCancel} theme={textDialogTheme} labelStyle={styles.labelStyle}>
                        Cancel
                    </Button>
                    <Button onPress={onAccept} theme={textDialogTheme} labelStyle={styles.labelStyle}>
                        {acceptTitle}
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Provider>
        </Portal>
    )
}
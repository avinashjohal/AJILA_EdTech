import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const RoadmapPDF = ({ roadmap }) => {
    const styles = StyleSheet.create({
        page: {
            padding: 20
        },
        section: {
            margin: 10,
            padding: 10,
            fontSize: 12
        },
        title: {
            fontSize: 20,
            marginBottom: 10
        },
        stepTitle: {
            fontSize: 16,
            marginBottom: 5
        },
        stepDescription: {
            fontSize: 14,
            marginBottom: 5
        },
        resource: {
            fontSize: 12,
            marginBottom: 2
        }
    });

    return (
        <Document>
            <Page style={styles.page}>
                <View>
                    <Text style={styles.title}>{roadmap.name} Roadmap</Text>
                    {roadmap.steps.map((step, index) => (
                        <View key={index} style={styles.section}>
                            <Text style={styles.stepTitle}>{step.title}</Text>
                            <Text style={styles.stepDescription}>{step.description}</Text>
                            {step.resources && (
                                <View>
                                    {step.resources.map((resource, idx) => (
                                        <Text key={idx} style={styles.resource}>{resource}</Text>
                                    ))}
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default RoadmapPDF;

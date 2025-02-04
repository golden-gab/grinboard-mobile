import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Avatar from "../shared/avatar";
import { borderRadius, colors, spacing, typography } from "../../style";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "../shared/form";
import Button from "../shared/Button";

const annonceComments = () => {
    const [comment, setComment] = useState({
        contenu: "",
        note: "",
    });
    const [isFocused, setIsFocused] = useState(false);
    useEffect(() => {
        // Ajoute des écouteurs pour détecter lorsque le clavier est affiché ou caché.
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setIsFocused(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setIsFocused(false);
            }
        );

        //Supprime les écouteurs d'événements lorsque le composant est démonté pour éviter les fuites de mémoire.
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    return (
            <View style={{ flex: 1 }}>
                <View style={styles.anonceurContainer}>
                    <Avatar />
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 1.5,
                            alignItems: "center",
                        }}
                    >
                        <Text>4</Text>
                        <Ionicons
                            name="star"
                            size={typography.fontSizeSmall}
                            color={colors.warning}
                        />
                        <Text style={styles.reviewNumber}>(14 reviews)</Text>
                    </View>
                </View>
                <ScrollView style={styles.commentsList}>
                    <View style={styles.commentsItem}>
                        <Image
                            source={{
                                uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                            }}
                            style={styles.userCommentImage}
                        />
                        <View style={styles.commentContainer}>
                            <View style={styles.commentContent}>
                                <View style={styles.commentHeader}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        Anonyme 1
                                    </Text>
                                    <View style={styles.commentNote}>
                                        <Text style={{ fontWeight: "bold" }}>
                                            3
                                        </Text>
                                        <Ionicons
                                            name="star"
                                            size={typography.fontSizeSmall}
                                            color={colors.warning}
                                        />
                                    </View>
                                </View>
                                <Text style={{ color: colors.text }}>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Est repellat ut a
                                </Text>
                            </View>
                            <Text style={styles.commentDate}>25 Jan 2025</Text>
                        </View>
                    </View>
                    <View style={styles.commentsItem}>
                        <Image
                            source={{
                                uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                            }}
                            style={styles.userCommentImage}
                        />
                        <View style={styles.commentContainer}>
                            <View style={styles.commentContent}>
                                <View style={styles.commentHeader}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        Anonyme 2
                                    </Text>
                                    <View style={styles.commentNote}>
                                        <Text style={{ fontWeight: "bold" }}>
                                            4
                                        </Text>
                                        <Ionicons
                                            name="star"
                                            size={typography.fontSizeSmall}
                                            color={colors.warning}
                                        />
                                    </View>
                                </View>
                                <Text style={{ color: colors.text }}>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Est repellat ut a Lorem,
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Est repellat ut a
                                </Text>
                            </View>
                            <Text style={styles.commentDate}>20 Jan 2025</Text>
                        </View>
                    </View>
                    <View style={styles.commentsItem}>
                        <Image
                            source={{
                                uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                            }}
                            style={styles.userCommentImage}
                        />
                        <View style={styles.commentContainer}>
                            <View style={styles.commentContent}>
                                <View style={styles.commentHeader}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        Anonyme 2
                                    </Text>
                                    <View style={styles.commentNote}>
                                        <Text style={{ fontWeight: "bold" }}>
                                            4
                                        </Text>
                                        <Ionicons
                                            name="star"
                                            size={typography.fontSizeSmall}
                                            color={colors.warning}
                                        />
                                    </View>
                                </View>
                                <Text style={{ color: colors.text }}>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Est repellat ut a Lorem,
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Est repellat ut a
                                </Text>
                            </View>
                            <Text style={styles.commentDate}>20 Jan 2025</Text>
                        </View>
                    </View>

                    <View style={styles.commentsItem}>
                        <Image
                            source={{
                                uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                            }}
                            style={styles.userCommentImage}
                        />
                        <View style={styles.commentContainer}>
                            <View style={styles.commentContent}>
                                <View style={styles.commentHeader}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        Anonyme 2
                                    </Text>
                                    <View style={styles.commentNote}>
                                        <Text style={{ fontWeight: "bold" }}>
                                            4
                                        </Text>
                                        <Ionicons
                                            name="star"
                                            size={typography.fontSizeSmall}
                                            color={colors.warning}
                                        />
                                    </View>
                                </View>
                                <Text style={{ color: colors.text }}>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Est repellat ut a Lorem,
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Est repellat ut a
                                </Text>
                            </View>
                            <Text style={styles.commentDate}>20 Jan 2025</Text>
                        </View>
                    </View>
                    <View style={styles.commentsItem}>
                        <Image
                            source={{
                                uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                            }}
                            style={styles.userCommentImage}
                        />
                        <View style={styles.commentContainer}>
                            <View style={styles.commentContent}>
                                <View style={styles.commentHeader}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        Anonyme 2
                                    </Text>
                                    <View style={styles.commentNote}>
                                        <Text style={{ fontWeight: "bold" }}>
                                            4
                                        </Text>
                                        <Ionicons
                                            name="star"
                                            size={typography.fontSizeSmall}
                                            color={colors.warning}
                                        />
                                    </View>
                                </View>
                                <Text style={{ color: colors.text }}>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Est repellat ut a Lorem,
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Est repellat ut a
                                </Text>
                            </View>
                            <Text style={styles.commentDate}>20 Jan 2025</Text>
                        </View>
                    </View>

                    <View style={styles.commentsItem}>
                        <Image
                            source={{
                                uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                            }}
                            style={styles.userCommentImage}
                        />
                        <View style={styles.commentContainer}>
                            <View style={styles.commentContent}>
                                <View style={styles.commentHeader}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        Anonyme 2
                                    </Text>
                                    <View style={styles.commentNote}>
                                        <Text style={{ fontWeight: "bold" }}>
                                            4
                                        </Text>
                                        <Ionicons
                                            name="star"
                                            size={typography.fontSizeSmall}
                                            color={colors.warning}
                                        />
                                    </View>
                                </View>
                                <Text style={{ color: colors.text }}>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Est repellat ut a Lorem,
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Est repellat ut a
                                </Text>
                            </View>
                            <Text style={styles.commentDate}>20 Jan 2025</Text>
                        </View>
                    </View>
                    <View style={{ height: 40 }} />
                </ScrollView>
                <View style={styles.commentForm}>
                    <Input
                        value={comment.contenu}
                        onChange={(value) => setComment({ ...comment, contenu: value })}
                        placeholder={"Ajouter un commentaire sur Golden gab"}
                        onFocus={() => setIsFocused(true)}
                    />

                    {isFocused && (
                        <View style={styles.commentFormHidden}>
                            <Input
                                value={comment.note}
								type={"decimal-pad"}
                                onChange={(value) => setComment({ ...comment, note: value })}
                                placeholder={
                                    "Donner une note entre 1 et 5"
                                }
								style={{width:"100%"}}
                            />
                            <Ionicons
								name="paper-plane-outline"
								size={typography.fontSizeLarge}
								style={styles.commentSubmit}
							/>
                        </View>
                    )}
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    anonceurContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    reviewNumber: {
        color: colors.text,
        fontSize: typography.fontSizeSmall,
        marginLeft: spacing.xs,
    },
    commentsList: {
        paddingVertical: spacing.lg,
        marginBottom: 70,
    },
    commentsItem: {
        flexDirection: "row",
        gap: spacing.md,
    },
    userCommentImage: {
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    commentContainer: {
        width: "87%",
    },
    commentContent: {
        padding: spacing.sm,
        borderRadius: borderRadius.medium,
        backgroundColor: colors.gray,
        width: "100%",
    },
    commentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: spacing.xs,
    },
    commentNote: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
    },
    commentDate: {
        color: colors.text,
        fontSize: typography.fontSizeSmall,
        marginTop: spacing.xs,
        paddingBottom: spacing.md,
    },
    commentForm: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
		backgroundColor:"white"
    },
	commentFormHidden:{
		flexDirection:"row",
		width:"100%",
		gap:spacing.sm,
		justifyContent:"space-between",
		alignItems:"center"
	},
	commentSubmit:{
        color: colors.primary,
		display:"flex",
		justifyContent:"center",
		alignItems:"center"

	},
});

export default annonceComments;

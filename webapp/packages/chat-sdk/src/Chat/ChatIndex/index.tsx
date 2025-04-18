import {forwardRef, ForwardRefRenderFunction} from "react";
import styles from './style.module.less';
import {AgentType} from "../type";

type Props = {
    agentList: AgentType[];
}

const ChatIndex: ForwardRefRenderFunction<any, Props> = ({agentList}, ref) => {
    return <main className={styles.mainContent}>
        <header className={styles.mainHeader}>
            <div className={styles.logoContainer}>
                <svg width="32" height="32" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="16" fill="#4285f4"/>
                    <path
                        d="M24 12c0-1.1-.9-2-2-2h-2V8c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V12z"
                        fill="white"/>
                </svg>
                <span className={styles.logoText}>ChatBI<b>您身边的数据分析小助理</b></span>
            </div>
            <div className="subtitle">我可以帮您处理数据相关的问题并提供可视化结果，请把您的任务交给我吧</div>
        </header>

        <div className={styles.chatContainer}>
            <div className={styles.inputArea}>
                <div className={styles.categoryTitle}>
                   您好，智能助理【{agentList[0]?.name}】将与您对话!
                </div>
                <textarea className={styles.inputBox} placeholder="请输入问题"></textarea>
                <div className={styles.buttonGroup}>
                    <button className={[styles.btnMain, styles.btnVoice].join(' ')}>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path
                                d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"
                                fill="currentColor"/>
                        </svg>
                        语音
                    </button>
                    <button className={[styles.btnMain, styles.btnSend].join(' ')}>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                        </svg>
                        发送
                    </button>
                </div>
            </div>
        </div>
    </main>
}

export default forwardRef(ChatIndex)
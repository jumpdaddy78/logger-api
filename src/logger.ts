export class MyLogger {
    private logLevels = ['INFO', 'DEBUG', 'ERROR', 'FATAL'];

    log(level: String, message: String) {
        if (!this.isEnabled(level)) {
            return;
        }

        const now = new Date();
        console.log(`${now.toISOString()} ${level}: ${message}`);
    }

    isEnabled(level: String): Boolean {
        if (!process.env.LOG_LEVEL) {
            return false;
        }

        return this.logLevels.includes(process.env.LOG_LEVEL.trim().toUpperCase()) && this.logLevels.indexOf(level.trim().toUpperCase()) <= this.logLevels.indexOf(process.env.LOG_LEVEL.trim().toUpperCase());
    }
}
import splitbee from '@splitbee/web';

class Analytics {
  public static init(splitbeeToken?: string) {
    if (process.env.NODE_ENV === 'development' && !splitbeeToken) {
      throw new Error('Must provide splitbee token in development');
    }

    splitbee.init({
      apiUrl: process.env.NODE_ENV === 'development' ? undefined : '/_hive',
      disableCookie: true,
      scriptUrl: process.env.NODE_ENV === 'development' ? undefined : '/bee.js',
      token: process.env.NODE_ENV === 'development' ? splitbeeToken : undefined,
    });
  }

  public static async viewExperience(company: string) {
    await splitbee.track('View Experience', {
      company,
    });
  }

  public static async viewProject(project: string) {
    await splitbee.track('View Project', {
      project,
    });
  }

  public static async viewResume(from: string) {
    await splitbee.track('View Resume', {
      from,
    });
  }

  public static async viewSocial(social: string) {
    await splitbee.track('View Social', {
      social,
    });
  }
}

export default Analytics;

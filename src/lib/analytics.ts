import splitbee from '@splitbee/web';

class Analytics {
  public static init(splitbeeToken: string) {
    if (splitbeeToken.length === 0) {
      throw new Error('Must provide splitbee token!');
    }

    splitbee.init({
      disableCookie: true,
      token: splitbeeToken,
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
